import React from "react";

class Edit extends React.Component{
    render(){
        return(
            <form>
                <label>
                    Name:<input type="text" name="Name" />
                </label><br/><br/>
                <label>
                    Alias:<input type="text" name="Alias" />
                </label><br/><br/>
                <label>
                    Team:<input type="text" name="Team" />
                </label><br/><br/>
                <input type="submit" value="Edit" />
            </form>
        )
    }
}
export default Edit;