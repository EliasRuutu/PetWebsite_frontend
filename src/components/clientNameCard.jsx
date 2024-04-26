const ClientNameCard = (props) => {
    const handleClick = () => {
        props.hide();
        props.select(props.client.Profile_ID)

    }
    return(
        <>
            <div className="client flex flex-row gap-2 justify-start m-2 items-center cursor-pointer w-full hover:bg-[#EBFCFF]" onClick={handleClick}>
                <div className="avatar rounded-lg overflow-hidden">
                    <img src={`/assets/images/clients/${props.client.avatarName}`} width ={64} className="w-12 h-12 object-cover" alt="avatar"/>
                </div>
                <div className="name text-base font-[#155263]">{props.client.name}</div>
            </div>
        </>
    )
}

export default ClientNameCard;