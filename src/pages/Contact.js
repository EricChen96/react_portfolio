function Contact() {
    return (
        <form>
            {/* <!-- Name input--> */}
            <section class="form-row">
                <section class="form-group col-md-12">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" placeholder="First name" />
                </section>
            </section>
            {/* <!-- User email input--> */}
            <section class="form-row">
                <section class="form-group col-md-12">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </section>
            </section>
            {/* <!-- User message input--> */}
            <section class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </section>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
};

export default Contact;