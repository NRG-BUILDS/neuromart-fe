import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ReactNode, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FiUploadCloud } from 'react-icons/fi';

const formSchema = z.object({
  name: z.string().min(5).max(120),
  desc: z.string().min(2).max(9999999999999),
  priceOld: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: 'Invalid code' }) // Ensure valid number
    .refine((val) => val >= 1000 && val <= 99999999999, {
      message: 'Price must be greater than ₦1000',
    }),
  price: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: 'Invalid number' }) // Ensure valid number
    .refine((val) => val >= 1000 && val <= 99999999999, {
      message: 'Price must be greater than ₦1000',
    }),

  categorySlug: z.string().min(4).max(20),
});

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Home & Kitchen', slug: 'home-kitchen' },
  { name: 'Beauty & Health', slug: 'beauty-health' },
  { name: 'Sports & Outdoors', slug: 'sports-outdoors' },
  { name: 'Automobiles', slug: 'automobiles' },
  { name: 'Books', slug: 'books' },
  { name: 'Groceries', slug: 'groceries' },
];

const UploadDatasets = () => {
  const { reset, ...form } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      desc: '',
      categorySlug: '',

      priceOld: 0,
      price: 0,
    },
  });
  const { toast } = useToast();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast({
      variant: 'destructive',
      title: 'Failed to create product',
      description:
        'An error occurred while creating the product. Please try again.',
    });

    console.log(values);
  };

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      console.log('Form changed:', value); // Logs the current form values
      console.log('Changed field:', name); // Logs the name of the field that changed
    });

    return () => subscription.unsubscribe(); // Cleanup subscription on unmount
  }, [form]);

  return (
    <div>
      {/* @ts-ignore */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10 max-w-[1035px] m-3 lg:mx-auto"
        >
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            <FileUpload
              name={'demo'}
              form={form}
              title="Upload the Dataset which you want to create."
              acceptedFileType=".csv, .json"
            />
            <FileUpload
              name={'demo'}
              form={form}
              title="Upload the Demo Dataset which contains minimum 10 rows."
              acceptedFileType=".csv, .json"
            />
            <FileUpload
              name={'dataset_image'}
              form={form}
              title="Upload the image of your dataset cover."
              acceptedFileType=".jpg, .png"
              maxFileSize={3}
            />
            <FileUpload
              name={'dataset_license'}
              form={form}
              title="Upload the license which contains the terms and conditions of the dataset."
              acceptedFileType=".pdf"
              maxFileSize={10}
            />
          </div>

          <div className="grid gap-3 gap-x-6 md:grid-cols-2">
            <div className="col-span-full">
              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your dataset</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={8}
                        placeholder="Your dataset description..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormInput name="name" label="Dataset Title" form={form} />
            <FormField
              control={form.control}
              name="categorySlug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Categories{' '}
                    <span className="text-xs text-purple-400">
                      (Category will be updated by our ML Model, once you upload
                      the Dataset.)
                    </span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem value={c.slug} key={c.slug}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormInput
              name="price"
              type="number"
              label={
                <span>
                  Price of Dataset{' '}
                  <span className="text-purple-400 text-xs">(in BBT)</span>
                </span>
              }
              form={form}
            />
            <FormField
              control={form.control}
              name="categorySlug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dataset For</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem value={c.slug} key={c.slug}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-full">
            <Button type="submit">Create Dataset</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UploadDatasets;

const FormInput = ({
  name,
  label,
  form,
  description,
  type,
  ...props
}: {
  name: string;
  label: string | ReactNode;
  type?: string;
  form: any;
  description?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} {...props} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface FileUploadProps {
  form: any;
  name: string;
  title: string;
  acceptedFileType: string;
  maxFileSize?: number;
}

const FileUpload = ({
  form,
  name,
  title,
  acceptedFileType,
  maxFileSize,
}: FileUploadProps) => {
  const handleImageInput = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.target;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Check if the file size exceeds the maximum file size
      if (maxFileSize && file.size > maxFileSize * 1024 * 1024) {
        alert(`File size exceeds the maximum limit of ${maxFileSize} MB`);
        return;
      }

      form.setValue(name, file);
    }
  };
  return (
    <label htmlFor={`${name}-file-upload`}>
      <div>
        <div className="flex justify-between items-center gap-5 p-4 hover:bg-white/10 border border-dashed border-white border-opacity-25 rounded-xl">
          <div className="flex items-start gap-3">
            <FiUploadCloud size={24} strokeWidth={1} className="min-w-6" />
            <div className="grid gap-1.5">
              <span className="">{title}</span>
              {!form.watch(name) && (
                <span className="text-gray-500">
                  {acceptedFileType}.{' '}
                  {maxFileSize && `File  must not exceed ${maxFileSize}MB`}
                </span>
              )}
              {form.watch(name) && (
                <span className="text-purple-400 max-w-[90px]  text-ellipsis">
                  {form.getValues(name).name}
                </span>
              )}
            </div>
          </div>
          <Button variant={'outline'} type="button" asChild>
            <span>Select</span>
          </Button>
        </div>
      </div>
      <input
        type="file"
        id={`${name}-file-upload`}
        className="sr-only"
        onChange={handleImageInput}
        accept={acceptedFileType}
      />
    </label>
  );
};
