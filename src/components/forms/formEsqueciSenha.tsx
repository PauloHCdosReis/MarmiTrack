"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const esqueciSenhaFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("O formato de email é inválido!")
    .transform((email) => {
      return email.trim();
    }),
});

type EsqueciSenhaFormData = z.infer<typeof esqueciSenhaFormSchema>;

export default function FormEsqueciSenha() {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EsqueciSenhaFormData>({
    resolver: zodResolver(esqueciSenhaFormSchema),
  });

  function esqueciSenhaUser(data: any) {
    console.log(data);
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-full max-w-xs"
        onSubmit={handleSubmit(esqueciSenhaUser)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
            type="text"
            id="email"
            {...register("email")}
            autoComplete="off"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <button
          className="bg-light-200 dark:bg-dark-100 rounded p-1 text-white"
          type="submit"
        >
          Esqueci Senha
        </button>
      </form>
    </div>
  );
}
