'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { transferStep1Schema, type TransferStep1Data } from '@/lib/validators'
import { useTransferStore } from '@/store/transferStore'
import { CURRENCIES } from '@/lib/constants'
import { formatCurrency, calculateFee } from '@/lib/utils'

// Mock recipients for demo
const mockRecipients = [
  { id: '1', name: 'John Doe', country: 'US' },
  { id: '2', name: 'Sarah Smith', country: 'AZ' },
  { id: '3', name: 'Ahmed Hassan', country: 'TR' },
]

export function StepOne() {
  const { amount, fromCurrency, toCurrency, recipientId, setStepOneData, setStep } = useTransferStore()

  const form = useForm<TransferStep1Data>({
    resolver: zodResolver(transferStep1Schema),
    defaultValues: {
      amount: amount || 0,
      fromCurrency: fromCurrency || 'USD',
      toCurrency: toCurrency || 'EUR',
      recipientId: recipientId || '',
    },
  })

  const watchedAmount = form.watch('amount')
  const watchedFromCurrency = form.watch('fromCurrency')
  const watchedToCurrency = form.watch('toCurrency')

  // Mock exchange rate
  const exchangeRate = 0.92
  const convertedAmount = watchedAmount * exchangeRate
  const fee = calculateFee(watchedAmount)
  const total = watchedAmount + fee

  const onSubmit = (data: TransferStep1Data) => {
    setStepOneData(data)
    setStep(2)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount to Send</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="100"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fromCurrency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>You Send</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="toCurrency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>They Receive</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {watchedAmount > 0 && (
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="font-medium">Exchange Rate:</span>
              <span>1 {watchedFromCurrency} = {exchangeRate} {watchedToCurrency}</span>
            </div>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Recipient gets:</span>
                <span className="font-medium">{formatCurrency(convertedAmount, watchedToCurrency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fee (1.5%):</span>
                <span className="font-medium">{formatCurrency(fee, watchedFromCurrency)}</span>
              </div>
              <div className="flex justify-between border-t pt-1 mt-1">
                <span className="font-medium">Total:</span>
                <span className="font-bold">{formatCurrency(total, watchedFromCurrency)}</span>
              </div>
            </div>
          </div>
        )}

        <FormField
          control={form.control}
          name="recipientId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipient</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a recipient" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mockRecipients.map((recipient) => (
                    <SelectItem key={recipient.id} value={recipient.id}>
                      {recipient.name} ({recipient.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  )
}
