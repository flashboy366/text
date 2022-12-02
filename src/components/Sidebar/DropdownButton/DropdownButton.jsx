import cln from './DropdownButton.module.scss'

export const DropdownButton = (props) => {
    const dropdownButtonClick = () => {
        props.setDropdownOpen(!props.dropdownOpen)
    }

    return(
        <button
            className={cln.dropButton}
            onClick={dropdownButtonClick}
        >
            <div className={cln.buttonText}>
                |||
            </div>
        </button>
    )
}