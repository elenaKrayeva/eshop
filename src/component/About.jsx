import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolore, ut nisi laudantium consequatur soluta explicabo dolores
              recusandae, ea velit placeat magnam veritatis obcaecati harum eos
              temporibus quas officia earum! Repudiandae, dolore sint similique
              pariatur eum quaerat harum laudantium obcaecati officia natus.
              Dolorum, dolorem. Vero neque sint, sapiente voluptatibus ut
              assumenda delectus libero vitae amet commodi eos nulla quam,
              molestiae possimus quisquam enim expedita doloribus facere nisi, a
              accusamus aliquid explicabo. Praesentium omnis, sit eum maxime,
              quod molestias nobis tempora nemo mollitia odit qui quaerat earum
              delectus provident. Architecto, atque id magnam quasi sit ullam
              voluptatum laborum iste sunt aliquid?
            </p>
            <Link className="btn btn-outline-dark px-4" to="/contact">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.jpg"
              alt="About us"
              height="400px"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
