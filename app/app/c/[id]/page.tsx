import "./channel.css";
import { sql } from "@vercel/postgres";

interface Props {
    params: {
        id: string
    }
}

export default async function Id({ params } : { params: { user: string } }) : Promise<JSX.Element> {

    const { rows } = await sql`SELECT * FROM users WHERE id=${params.user}`;
    return ( 
        <div className="app__wrapper-channel channel">
            {rows.map((row) => (
                <div className="channel__header">
                    <div className="channel__icon">

                    </div>
                    <h3 className="channel__name">{row.username}</h3>
                </div>
            ))}
        </div>
    )
}