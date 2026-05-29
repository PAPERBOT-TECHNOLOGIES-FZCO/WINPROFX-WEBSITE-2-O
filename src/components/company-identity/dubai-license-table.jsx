import React from 'react'
import RegistrationTable from '@/components/company-identity/registration-table'
import { getDubaiLicenseRows } from '@/lib/company-registration'

export default function DubaiLicenseTable() {
  return <RegistrationTable rows={getDubaiLicenseRows()} />
}
