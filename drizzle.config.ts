import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path:'.env'});

if(!process.env.DATABASE_URL){
    console.log("cannot find data Base url")
}

export default{
    schema:'./schema.ts',
    out:"./migrations",
    dbCredentials:{
        connectionString:process.env.DATABASE_URL || '',
    },
}satisfies Config;