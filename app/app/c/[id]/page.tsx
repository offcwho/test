import "./channel.css";
import { sql } from "@vercel/postgres";

export default async function Id({ params } : { params: { id: string } }) : Promise<JSX.Element> {

    const { rows } = await sql`SELECT * FROM users WHERE id=${params.id}`;
    return ( 
        <div className="app__wrapper-channel channel">
            {rows.map((row) => (
                <div className="channel__header" key={row.id}>
                    <div className="channel__icon">

                    </div>
                    <h3 className="channel__name">{row.username}</h3>
                </div>
            ))}
        </div>
    )
}