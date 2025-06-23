<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, googleProvider } from "@/control/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const router = useRouter();
const route = useRoute();

const email = ref("");
const password = ref("");

async function onSubmit() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    const redirect = (route.query.redirect as string) || "/p/dashboard";
    router.replace(redirect);
  } catch (err) {
    console.error(err);
  }
}

async function loginWithGoogle() {
  try {
    await signInWithPopup(auth, googleProvider);
    const redirect = (route.query.redirect as string) || "/p/dashboard";
    router.replace(redirect);
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Login </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
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
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" v-model="password" required />
          </div>
          <Button type="submit" class="w-full"> Login </Button>
          <Button variant="outline" class="w-full" @click="loginWithGoogle">
            Login with Google
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline"> Sign up </a>
        </div>
      </CardContent>
    </Card>
  </form>
</template>
