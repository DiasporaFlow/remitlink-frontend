'use client'

import { CheckCircle2, AlertCircle } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useTransferStore } from '@/store/transferStore'
import { formatCurrency, calculateFee } from '@/lib/utils'
import { useState } from 'react'

interface StepTwoProps {
  onComplete: () => void
  isSubmitting: boolean
}

export function StepTwo({ onComplete, isSubmitting }: StepTwoProps) {
  const { amount, fromCurrency, toCurrency, recipientId } = useTransferStore()
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  // Mock data
  const exchangeRate = 0.92
  const convertedAmount = amount * exchangeRate
  const fee = calculateFee(amount)
  const total = amount + fee
  const recipientName = recipientId === '1' ? 'John Doe' : recipientId === '2' ? 'Sarah Smith' : 'Ahmed Hassan'

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-muted/30 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <CheckCircle2 className="h-5 w-5" />
          <h3 className="font-semibold">Transfer Summary</h3>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">You send</span>
            <span className="font-semibold">{formatCurrency(amount, fromCurrency)}</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Transfer fee (1.5%)</span>
            <span className="font-semibold">{formatCurrency(fee, fromCurrency)}</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Total amount</span>
            <span className="font-bold text-lg">{formatCurrency(total, fromCurrency)}</span>
          </div>

          <div className="flex justify-between py-2 bg-primary/10 rounded px-3">
            <span className="text-muted-foreground">Recipient gets</span>
            <span className="font-bold text-primary">{formatCurrency(convertedAmount, toCurrency)}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Exchange rate</span>
            <span className="text-sm">1 {fromCurrency} = {exchangeRate} {toCurrency}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Recipient</span>
            <span className="font-medium">{recipientName}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Transfer method</span>
            <span className="font-medium">Blockchain</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Estimated arrival</span>
            <span className="font-medium">Within 5 minutes</span>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-medium text-yellow-900 mb-1">Please verify</p>
          <p className="text-yellow-700">
            Double-check all transfer details. Once confirmed, this transaction cannot be reversed.
          </p>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="terms"
          checked={agreeToTerms}
          onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
          disabled={isSubmitting}
        />
        <Label
          htmlFor="terms"
          className="text-sm leading-relaxed cursor-pointer"
        >
          I confirm that all details are correct and I agree to the{' '}
          <a href="#" className="text-primary hover:underline">
            terms and conditions
          </a>
          . I understand this transaction is final once processed.
        </Label>
      </div>

      {!agreeToTerms && (
        <p className="text-sm text-destructive">
          You must agree to the terms and conditions to proceed
        </p>
      )}
    </div>
  )
}
