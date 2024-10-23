import "./channel.css";

interface Props {
    params: {
        id: string
    }
}

export default function Id({ params } : Props){
    return ( 
        <div className="app__wrapper-channel channel">
            <div className="channel__header">
                <div className="channel__icon">

                </div>
                <h3 className="channel__name">{params.id}</h3>
            </div>
        </div>
    )
}