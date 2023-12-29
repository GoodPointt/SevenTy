import { z } from 'zod';

const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: 'required' })
      .regex(new RegExp(/^[a-zA-Z\u0400-\u04FF\s'-]+$/), 'invalid'),
    phone: z.string().trim().min(8, { message: 'invalid' }),
    policy: z
      .string()
      .min(2, { message: 'invalid' })
      .nullable()
      .refine((value) => value === 'on', {
        message: 'Policy must be "on".',
      }),
  })
  .partial();

interface IFormFields {
  name?: string | undefined;
  phone?: string | undefined;
  policy?: string | undefined;
  message?: string;
  errors?: {
    name?: string[] | undefined;
    phone?: string[] | undefined;
    policy?: string[] | undefined;
  };
}

export async function submitData(
  prevState: IFormFields | undefined,
  formData: FormData
): Promise<IFormFields | undefined> {
  const name = formData.get('name')?.toString();
  const phone = formData.get('phone')?.toString();
  const policy = formData.get('policy')?.toString();

  const validatedFields = schema.safeParse({
    name,
    phone,
    policy,
  });

  if (!validatedFields.success) {
    const errorsRes = validatedFields.error.flatten().fieldErrors;
    if (!policy) {
      return {
        errors: { ...errorsRes, policy: ['required'] },
        message: 'Error.',
      };
    }
    return {
      errors: errorsRes,
      message: 'Error.',
    };
  }

  try {
    await setTimeout(
      async () =>
        alert(
          `👌 ✅ 🌈 ❤️\n\n😎${name} \n\n📞${phone} \n\nSubmitted succesfully!`
        ),
      500
    );
    // const res = await createContact({ name, phone });

    // if (res) {
    return { name, phone, policy, message: 'success' };
    // }
  } catch (error) {
    console.error(error);
  }
}
