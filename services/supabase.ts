import 'react-native-url-polyfill';

import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://cbfndazbjaqhrcuoxfxs.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZm5kYXpiamFxaHJjdW94ZnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMzcyNzUsImV4cCI6MjAzMTkxMzI3NX0.1apA-YaEl5DokkeS33hZXDI4GjMvBb0ZZcqygU7fU24"


export const supabase = createClient(supabaseUrl, supabaseKey);

