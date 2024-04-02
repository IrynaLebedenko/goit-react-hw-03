import css from "./SearchBox.module.css"

const searchBox = ({value, onSearchContacts}) => {
    return ( 
        <div className={css.searchBoxContainer}>
            <p className={css.searchBoxLabel}>Find contacts by name</p>
            <input className={css.searchBoxInput} type = "text" value = {value} onChange = {(event)=> onSearchContacts(event.target.value)} />
        </div>
    )
}
export default searchBox;
