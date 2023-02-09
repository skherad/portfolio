import './ContactPage.scss'

const ContactPage = () => {
  return (
    <form className='form'>
        <h2 className='form__title'>CONTACT</h2>
        <div className='form__border'></div>
        <p className='form__text'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <label className='form__label' htmlFor="name">Name</label>
        <input className='form__input' name="name" placeholder='Enter your name...'></input>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' name="email" placeholder='Enter your email...'></input>
        <label className='form__label' htmlFor="message">Message</label>
        <textarea className='form__input' name="message" placeholder='Type...' cols="30" rows="10"></textarea>
        <button className='form__btn' type='submit'>Submit</button>
    </form>
  )
}

export default ContactPage