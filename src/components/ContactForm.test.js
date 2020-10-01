import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
describe("Checking Form", () => {
  test("checking for inputs", async () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameINput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "Nathan" },
    });
    fireEvent.change(lastNameINput, {
      target: { name: "lastName", value: "Patterson" },
    });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "test@test.com" },
    });
    fireEvent.change(messageInput, {
      target: { name: "message", value: "I guess this be a test message" },
    });

    fireEvent.click(button);

    const newPerson = await screen.findByText(/nathan/i);
  });
});
