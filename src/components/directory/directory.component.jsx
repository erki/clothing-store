import React from "react";
import {Styled} from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";

const Directory = ({sections}) => (
    <Styled.DirectoryMenu>
        {
            sections.map(({id, ...otherSectionProperties}) =>
                <MenuItem key={id} {...otherSectionProperties}/>)
        }
    </Styled.DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);