'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Header } from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Upload,
  CheckCircle2,
  AlertCircle,
  Clock,
  Camera,
} from 'lucide-react'
import { toast } from 'sonner'
import { KYCStatus } from '@/types'
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    dateOfBirth: '', // Would come from extended profile API
    address: '', // Would come from extended profile API
    city: '', // Would come from extended profile API
    postalCode: '', // Would come from extended profile API
    countryCode: user?.countryCode || '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = async () => {
    try {
      // API call to update profile
      // await updateProfile(formData)
      toast.success('Profile updated successfully')
      setIsEditing(false)
    } catch (error) {
      toast.error('Failed to update profile')
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, documentType: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB')
      return
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      toast.error('Only JPEG, PNG, and PDF files are allowed')
      return
    }

    setIsUploading(true)
    try {
      // API call to upload document
      // await uploadKYCDocument(file, documentType)
      toast.success(`${documentType} uploaded successfully`)
    } catch (error) {
      toast.error(`Failed to upload ${documentType}`)
    } finally {
      setIsUploading(false)
    }
  }

  const getKYCStatusConfig = (status: KYCStatus) => {
    switch (status) {
      case 'approved':
        return {
          icon: CheckCircle2,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          badge: 'success',
          text: 'Verified',
        }
      case 'pending':
      case 'under_review':
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          badge: 'warning',
          text: 'Pending Review',
        }
      case 'rejected':
        return {
          icon: AlertCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          badge: 'destructive',
          text: 'Rejected',
        }
      default:
        return {
          icon: AlertCircle,
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          badge: 'secondary',
          text: 'Not Started',
        }
    }
  }

  const kycConfig = getKYCStatusConfig(user?.kycStatus || 'not_started')
  const KYCIcon = kycConfig.icon

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and verification status</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <div className="relative mt-1">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <div className="relative mt-1">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* KYC Verification Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Identity Verification (KYC)
                  </CardTitle>
                  <CardDescription>
                    Complete your KYC verification to unlock higher transaction limits
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Current Status */}
                  <div className={`p-4 rounded-lg ${kycConfig.bgColor}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <KYCIcon className={`h-6 w-6 ${kycConfig.color}`} />
                        <div>
                          <p className="font-semibold text-gray-900">Verification Status</p>
                          <p className={`text-sm ${kycConfig.color}`}>{kycConfig.text}</p>
                        </div>
                      </div>
                      <Badge variant={kycConfig.badge as any}>{kycConfig.text}</Badge>
                    </div>
                  </div>

                  {/* Transaction Limits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Transaction Limits</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Current Limit</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${user?.kycStatus === 'approved' ? '50,000' : '1,000'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Per transaction</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Monthly Limit</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${user?.kycStatus === 'approved' ? '200,000' : '5,000'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Per month</p>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  {user?.kycStatus !== 'approved' && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Upload Documents</h4>

                      {/* ID Document */}
                      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">Government-Issued ID</p>
                            <p className="text-sm text-gray-500">Passport, Driver&apos;s License, or National ID</p>
                          </div>
                          <Label
                            htmlFor="id-upload"
                            className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <Upload className="h-4 w-4 inline mr-2" />
                            Upload
                          </Label>
                          <input
                            id="id-upload"
                            type="file"
                            className="hidden"
                            accept="image/jpeg,image/png,image/jpg,application/pdf"
                            onChange={(e) => handleFileUpload(e, 'Government ID')}
                            disabled={isUploading}
                          />
                        </div>
                      </div>

                      {/* Proof of Address */}
                      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">Proof of Address</p>
                            <p className="text-sm text-gray-500">Utility bill or bank statement (last 3 months)</p>
                          </div>
                          <Label
                            htmlFor="address-upload"
                            className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <Upload className="h-4 w-4 inline mr-2" />
                            Upload
                          </Label>
                          <input
                            id="address-upload"
                            type="file"
                            className="hidden"
                            accept="image/jpeg,image/png,image/jpg,application/pdf"
                            onChange={(e) => handleFileUpload(e, 'Proof of Address')}
                            disabled={isUploading}
                          />
                        </div>
                      </div>

                      {/* Selfie */}
                      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-gray-900">Selfie with ID</p>
                            <p className="text-sm text-gray-500">Clear photo holding your ID next to your face</p>
                          </div>
                          <Label
                            htmlFor="selfie-upload"
                            className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <Camera className="h-4 w-4 inline mr-2" />
                            Upload
                          </Label>
                          <input
                            id="selfie-upload"
                            type="file"
                            className="hidden"
                            accept="image/jpeg,image/png,image/jpg"
                            onChange={(e) => handleFileUpload(e, 'Selfie')}
                            disabled={isUploading}
                          />
                        </div>
                      </div>

                      <p className="text-sm text-gray-500">
                        * All documents will be reviewed within 24-48 hours. You&apos;ll receive an email notification once verified.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Profile Summary */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200">
                        <Camera className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                    <div className="mt-3">
                      <Badge variant={kycConfig.badge as any}>{kycConfig.text}</Badge>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 border-t pt-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium text-gray-900">Jan 2025</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Country</span>
                      <span className="font-medium text-gray-900">{user?.countryCode || 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Account Type</span>
                      <span className="font-medium text-gray-900">Personal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Manage Recipients
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Preferences
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
