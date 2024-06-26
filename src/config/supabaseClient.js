import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

console.log('supabaseUrl', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
