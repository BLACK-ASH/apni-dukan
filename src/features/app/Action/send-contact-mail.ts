'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
export const sendContactMail = async (values: { email: string; subject: string; message: string }) => {
  const email = await payload.sendEmail({
    to: values.email,
    subject: values.subject,
    text: values.message,
  })

  return email
}
