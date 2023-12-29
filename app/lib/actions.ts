import { z } from 'zod';

const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: 'invalid' })
      .regex(new RegExp(/^[a-zA-Z\u0400-\u04FF\s'-]+$/), 'invalid'),
    phone: z.string().trim().min(8, { message: 'invalid' }),
  })
  .partial();

interface IFormFields {
  name?: string | undefined;
  phone?: string | undefined;
  message?: string;
  errors?: { name?: string[] | undefined; phone?: string[] | undefined };
}

export async function submitData(
  prevState: IFormFields | undefined,
  formData: FormData
): Promise<IFormFields | undefined> {
  const name = formData.get('name')?.toString();
  const phone = formData.get('phone')?.toString();

  const validatedFields = schema.safeParse({
    name,
    phone,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
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
    return { name, phone, message: 'success' };
    // }
  } catch (error) {
    console.error(error);
  }
}
