import {createClient} from '@supabase/supabase-js';

const URL = 'https://dsebcrbxjwqbhlgyctqr.supabase.co';
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZWJjcmJ4andxYmhsZ3ljdHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTE2NzIsImV4cCI6MjA2MDU4NzY3Mn0.izARMoBFAXG3IkuUSRDS6We9ppkb3WUGaeESKicH54Y"

export const supabase = createClient(URL, KEY);