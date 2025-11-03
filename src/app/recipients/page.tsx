'use client'

import { useState } from 'react'
import { Header } from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  Search,
  UserCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  Edit2,
  Trash2,
  Building,
} from 'lucide-react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'
import { Select } from '@/components/ui/select'

interface Recipient {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  bankName: string
  accountNumber: string
  country: string
  isFavorite: boolean
  lastUsed?: string
}

const mockRecipients: Recipient[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+234 801 234 5678',
    bankName: 'First Bank of Nigeria',
    accountNumber: '1234567890',
    country: 'Nigeria',
    isFavorite: true,
    lastUsed: '2025-01-15',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '+63 917 123 4567',
    bankName: 'BDO Unibank',
    accountNumber: '9876543210',
    country: 'Philippines',
    isFavorite: false,
    lastUsed: '2025-01-10',
  },
]

export default function RecipientsPage() {
  const [recipients, setRecipients] = useState<Recipient[]>(mockRecipients)
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const [newRecipient, setNewRecipient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bankName: '',
    accountNumber: '',
    country: '',
  })

  const filteredRecipients = recipients.filter(
    (recipient) =>
      recipient.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipient.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipient.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const favoriteRecipients = filteredRecipients.filter((r) => r.isFavorite)
  const otherRecipients = filteredRecipients.filter((r) => !r.isFavorite)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRecipient({
      ...newRecipient,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddRecipient = () => {
    if (!newRecipient.firstName || !newRecipient.lastName || !newRecipient.accountNumber) {
      toast.error('Please fill in all required fields')
      return
    }

    const recipient: Recipient = {
      id: Date.now().toString(),
      ...newRecipient,
      isFavorite: false,
    }

    setRecipients([...recipients, recipient])
    toast.success('Recipient added successfully')
    setIsAddingNew(false)
    setNewRecipient({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      bankName: '',
      accountNumber: '',
      country: '',
    })
  }

  const handleToggleFavorite = (id: string) => {
    setRecipients(
      recipients.map((r) => (r.id === id ? { ...r, isFavorite: !r.isFavorite } : r))
    )
    toast.success('Favorite status updated')
  }

  const handleDeleteRecipient = (id: string) => {
    if (confirm('Are you sure you want to delete this recipient?')) {
      setRecipients(recipients.filter((r) => r.id !== id))
      toast.success('Recipient deleted successfully')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipients</h1>
            <p className="text-gray-600">Manage your saved recipients for quick transfers</p>
          </div>
          <Button onClick={() => setIsAddingNew(true)} size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Add Recipient
          </Button>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search recipients by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </motion.div>

        {/* Add New Recipient Form */}
        <AnimatePresence>
          {isAddingNew && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Add New Recipient</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={newRecipient.firstName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={newRecipient.lastName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={newRecipient.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={newRecipient.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bankName">Bank Name *</Label>
                      <Input
                        id="bankName"
                        name="bankName"
                        value={newRecipient.bankName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="accountNumber">Account Number *</Label>
                      <Input
                        id="accountNumber"
                        name="accountNumber"
                        value={newRecipient.accountNumber}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={newRecipient.country}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddRecipient}>Add Recipient</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Favorites Section */}
        {favoriteRecipients.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2 fill-current" />
              Favorite Recipients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipients.map((recipient, index) => (
                <RecipientCard
                  key={recipient.id}
                  recipient={recipient}
                  index={index}
                  onToggleFavorite={handleToggleFavorite}
                  onDelete={handleDeleteRecipient}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Recipients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {favoriteRecipients.length > 0 ? 'Other Recipients' : 'All Recipients'}
            <span className="text-gray-500 text-base font-normal ml-2">
              ({otherRecipients.length})
            </span>
          </h2>
          {otherRecipients.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRecipients.map((recipient, index) => (
                <RecipientCard
                  key={recipient.id}
                  recipient={recipient}
                  index={index + favoriteRecipients.length}
                  onToggleFavorite={handleToggleFavorite}
                  onDelete={handleDeleteRecipient}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <UserCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No recipients found</p>
                <Button onClick={() => setIsAddingNew(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Recipient
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </main>
    </div>
  )
}

interface RecipientCardProps {
  recipient: Recipient
  index: number
  onToggleFavorite: (id: string) => void
  onDelete: (id: string) => void
}

function RecipientCard({ recipient, index, onToggleFavorite, onDelete }: RecipientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                {recipient.firstName[0]}{recipient.lastName[0]}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {recipient.firstName} {recipient.lastName}
                </h3>
                <p className="text-sm text-gray-500">{recipient.country}</p>
              </div>
            </div>
            <button
              onClick={() => onToggleFavorite(recipient.id)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Star
                className={`h-5 w-5 ${
                  recipient.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-400'
                }`}
              />
            </button>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Building className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">{recipient.bankName}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Account:</span>
              <span>{recipient.accountNumber}</span>
            </div>
            {recipient.email && (
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{recipient.email}</span>
              </div>
            )}
            {recipient.phoneNumber && (
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{recipient.phoneNumber}</span>
              </div>
            )}
          </div>

          {recipient.lastUsed && (
            <div className="mb-4">
              <Badge variant="secondary" className="text-xs">
                Last used: {new Date(recipient.lastUsed).toLocaleDateString()}
              </Badge>
            </div>
          )}

          <div className="flex gap-2 pt-4 border-t">
            <Button variant="outline" className="flex-1" size="sm">
              <Edit2 className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <Button
              variant="outline"
              className="flex-1 text-red-600 hover:text-red-700 hover:border-red-300"
              size="sm"
              onClick={() => onDelete(recipient.id)}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
