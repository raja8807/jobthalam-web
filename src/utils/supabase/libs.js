'use client'

import supabase from "./auth";

export const signIn = async ({ email, password }) => {
  const res = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return res;
};

export const updateUser = async (data) => {
  const res = await supabase.auth.updateUser({
    data,
  });

  return res;
};

export const signUpNewUser = async ({ email, password }) => {
  const res = await supabase.auth.signUp({
    email,
    password,
  });

  return res;
};

export const signOut = async () => {
  const res = await supabase.auth.signOut();
  return res;
};
