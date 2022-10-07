import { Button } from "components/Button/Button"


export const FormAddContacts = ({inputFunc, submitFunc}) => {
    return(
        <>
        <form action="" onSubmit={(e) => submitFunc(e)}>
            <input
            onInput={(e) => inputFunc(e)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            <button type="submit">submit</button>
        </form>

        </>
    )
}