

export const Block = props => {


    if (!props.state.faves) {
        props.state.faves = []
    }

    return <c-c style={{
        width: 150, flex: 1, minWidth: 150,
        position: "relative" , backgroundColor:"white",
        borderRadius:5, margin:"10px", boxShadow:"  0px 0px 9px 2px rgba(0,0,0,0.43)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{ width:"100%", height: 200, objectFit: "fill", minWidth: 150,
            borderTopLeftRadius:5 , borderTopRightRadius:5 }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()

            }} />
        <f-cc style={{ padding: "5px 0", width: "100%" }}><f-15>idijkdjklbjfk</f-15></f-cc>
        <hr style={{width:"90%", opacity:0.4}}/>
        <f-csb style={{ width: "100%", padding: "5px 0" }}>

            <img src="https://cdn.ituring.ir/qepal/cart.svg"
                style={{
                    height: 30, width: 30, objectFit: "contain",
                    margin: "0 10px"
                }} />

            <c-x style={{ direction: "ltr", margin: "0 10px" }}>
                <f-12><del>۱۲۰۰۰ تومان</del></f-12>
                <f-15>۱۵۰۰۰ تومان</f-15>
            </c-x>
        </f-csb>
    </c-c>
}

