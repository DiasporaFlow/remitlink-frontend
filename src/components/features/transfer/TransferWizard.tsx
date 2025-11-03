'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { useTransferStore } from '@/store/transferStore'
import { toast } from 'sonner'

export function TransferWizard() {
  const router = useRouter()
  const { step, setStep, reset } = useTransferStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleComplete = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Transfer initiated successfully!')
      reset()
      router.push('/transactions')
    } catch (error) {
      toast.error('Transfer failed. Please try again.')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressValue = (step / 2) * 100

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Send Money</CardTitle>
            <div className="text-sm text-muted-foreground">
              Step {step} of 2
            </div>
          </div>
          <Progress value={progressValue} className="h-2" />
          <CardDescription className="mt-4">
            {step === 1 && 'Enter transfer details'}
            {step === 2 && 'Review and confirm your transfer'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo onComplete={handleComplete} isSubmitting={isSubmitting} />}

          {step === 1 && (
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => router.push('/dashboard')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleComplete} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Confirm Transfer
                    <Check className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
