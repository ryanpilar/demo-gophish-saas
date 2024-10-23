'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/components/ui/use-toast'
import { Check, X } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'

/** -----------------------------------|| Setup Billing - PAGE ||-------------------------------------- **/

const Page = () => {
  const { toast } = useToast()

  // Form Schema for Phishing Agreement
  const formSchema = z.object({
    agree: z.boolean().refine(val => val === true, {
      message: "Please agree to our terms."
    })
  })

  type FormData = z.infer<typeof formSchema>

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agree: false
    }
  })

  const onSubmit = (data: FormData) => {
    toast({
      title: "Success!",
      description: "Thank you for agreeing to use our tool appropriately.",
      variant: "default",
      action: <Check className="text-green-600 h-5 w-5" />
    })
  }

  const onError = () => {
    toast({
      title: "Error!",
      description: "Please agree to the terms before proceeding.",
      variant: "destructive",
      action: <X className="text-red-600 h-5 w-5" />
    })
  }

  return (
    <div className="flex flex-col items-center space-y-8 min-h-screen bg-slate-100 grainy-light p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Simple Billing
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Setup in 5 minutes. No hidden fees. Cancel anytime.
              </p>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] bg-white rounded-lg shadow-md">
              <div className="grid gap-6">
                <h3 className="text-xl font-bold sm:text-2xl">
                  What&apos;s included
                </h3>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Unlimited Posts
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Unlimited Users
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Custom domain
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Dashboard Analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Access to Discord
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Premium Support
                  </li>
                </ul>

                <section className="space-y-6 flex items-center py-2 w-full max-w-2xl">
                  <FormField
                    control={form.control}
                    name="agree"
                    render={({ field }) => (
                      <FormItem className="flex flex-wrap items-center space-x-6">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className={cn(
                              "w-7 h-7 mt-1 rounded focus:ring-green-500",
                              form.formState.errors.agree
                                ? "border-red-500"
                                : "border-gray-300 text-green-600"
                            )}
                          />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="text-gray-700 text-sm">
                            I agree to PeerPhishing's terms of use.
                          </FormLabel>
                          {form.formState.errors.agree && (
                            <p className="text-red-500 text-sm">{form.formState.errors.agree.message}</p>
                          )}
                        </div>
                      </FormItem>
                    )}
                  />
                </section>
              </div>
              <div className="flex flex-col justify-center gap-4 text-center h-full pb-1">
                <div>
                  <h4 className="text-7xl font-bold pb-3">$5</h4>
                  <p className="text-sm font-medium text-muted-foreground">
                    per user, Billed Monthly
                  </p>
                </div>

                <Button
                  type="submit"
                  className={cn(buttonVariants({ size: "xl" }))}
                >
                  Get Started
                </Button>
              </div>
            </div>
           
          </section>
        </form>
      </Form>
    </div>
  )
}

export default Page
