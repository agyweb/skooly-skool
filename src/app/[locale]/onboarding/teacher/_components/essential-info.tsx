"use client";

import { essentialInfoSchema } from "@/validations/essenstial-info-validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormCombobox from "@/components/forms/form-combobox";
import { genders, languages } from "@/constants/common";
import { moroccanCities } from "@/constants/moroccan-cities";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function EssentialInfo() {
  const form = useForm<z.infer<typeof essentialInfoSchema>>({
    resolver: zodResolver(essentialInfoSchema),
    defaultValues: {
      fullName: "",
      age: undefined,
      phoneNumber: "",
      gender: undefined,
      nativeLanguage: undefined,
      city: undefined,

      profileImage: undefined,
      teachingLanguage: undefined,
    },
  });

  const [age, setAge] = useState(0);

  const onSubmit = (essentialInfo: z.infer<typeof essentialInfoSchema>) => {
    console.log(essentialInfo);
  };

  console.log(age);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="enter your fullname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="enter your age"
                    {...field}
                    onChange={(e) => {
                      field.onChange(
                        Number.isNaN(parseFloat(e.target.value))
                          ? 0
                          : parseFloat(e.target.value),
                      );
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <FormCombobox
                    onChange={field.onChange}
                    name="gender"
                    data={genders}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nativeLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Native Language</FormLabel>
                <FormControl>
                  <FormCombobox
                    onChange={field.onChange}
                    name="native language"
                    data={languages}
                    notFoundMessage="No language found."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <FormCombobox
                    onChange={field.onChange}
                    name="city"
                    data={moroccanCities}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
