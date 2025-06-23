<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth } from '@/control/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')

async function onSubmit() {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    const redirect = (route.query.redirect as string) || '/p/dashboard'
    router.replace(redirect)
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">Sign Up</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="email"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" v-model="password" required />
          </div>
          <Button type="submit" class="w-full">Sign Up</Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <router-link to="/login" class="underline">Log in</router-link>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
