<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth } from '@/control/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

const email = ref('')
const sent = ref(false)

async function onSubmit() {
  try {
    await sendPasswordResetEmail(auth, email.value)
    sent.value = true
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your email to reset your password</CardDescription>
      </CardHeader>
      <CardContent>
        <div v-if="!sent" class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" v-model="email" required />
          </div>
          <Button type="submit" class="w-full">Send Reset Email</Button>
        </div>
        <p v-else class="text-center">A password reset link has been sent to your email.</p>
        <div class="mt-4 text-center text-sm">
          <router-link to="/login" class="underline">Back to login</router-link>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
