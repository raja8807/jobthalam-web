import supabase from "../auth";
import { updateUser } from "../libs";

export const getCurrentUserById = async (id, role) => {
  if (role) {
    if (role === "Candidates") {
      const res = await supabase.from(role).select().eq("user_id", id);
      return res;
    }
    if (role === "Employers") {
      const res = await supabase
        .from(role)
        .select(
          `*,
         company:Companies(*)`
        )
        .eq("user_id", id);
      return res;
    }
  }

  return [];
};

export const updateCurrentUser = async (id, userData, role) => {
  let data;
  let error;
  let res = await updateUser(userData);

  data = res?.data;
  error = res?.error;

  if (res.data) {
    const updateRes = await supabase
      .from(role)
      .update({ userData })
      .eq("user_id", id);
    data = updateRes.data;
    error = updateRes.error;
  }

  return { data, error };
};

export const createNewUser = async (userData, role) => {
  const res = await supabase.from(role).insert({ ...userData });
  const x = supabase.auth.updateUser({
    data: {
      role,
    },
  });

  return {
    data: !res?.error ? userData : null,
    error: res.error,
  };
};
