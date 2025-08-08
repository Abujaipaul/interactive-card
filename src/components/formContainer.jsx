
function FormContainer({formData, handleChange, handleSubmit, errors}) {
  return (
    <div className="form_container">
      <form className="card_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Cardholder Name</label>
          <input
            type="text"
            id="name"
            name="name" // The 'name' attribute is very important!
            placeholder="e.g. Jane Appleseed"
            value={formData.name}
            onChange={handleChange}
            maxLength="19"
            className={errors.name ? 'input-error' : ''}
          />
           {/* If an error for 'name' exists, display it */}
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form_group">
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            id="number"
            className="number"
            name="number" 
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="19"
            value={formData.number}
            onChange={handleChange}
          />
           {errors.number && <p className="error-text">{errors.number}</p>}
        </div>

        <div className="form_row">
          <div className="form_group">
            <label htmlFor="month">Exp. Date (MM/YY)</label>
            <div className="expiry_inputs">
              <input type="text" id="month" name="mm" maxLength="2" placeholder="MM" value={formData.mm} onChange={handleChange} className={errors.mm ? 'input-error' : ''}/>
              <input type="text" id="year" name="yy" maxLength="2" placeholder="YY" value={formData.yy} onChange={handleChange} className={errors.yy ? 'input-error' : ''}/>
            </div>

               {(errors.mm || errors.yy) && <p className="error-text">Can't be blank</p>}
          </div>

          <div className="form_group">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" name="cardCvc" placeholder="e.g. 123" value={formData.cardCvc} onChange={handleChange} maxLength="3" className={errors.cardCvc ? 'input-error' : ''} />
            {errors.cardCvc && <p className="error-text">{errors.cardCvc}</p>}
          </div>
        </div>

        <button type="submit" className="submit_btn">Confirm</button>
      </form>
    </div>
  );
}


export default FormContainer