/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignIn from '.';



jest.mock('axios', () => {
    return {
      isAxiosError: () => true,
      create: () => {
        return {
          get: jest.fn(),
          post: jest.fn(),
          patch: jest.fn(),
          delete: jest.fn(),
          interceptors: {
            request: { eject: jest.fn(), use: jest.fn() },
            response: { eject: jest.fn(), use: jest.fn() },
          },
        };
      },
    };
  });
describe("Login invalid", () => {
  it("Login with invalid credentials", async () => {
    const { getByLabelText, findByText, getByRole, debug } = render(
      <MemoryRouter initialEntries={["/login"]}>
        <SignIn />
      </MemoryRouter>
    );
   debug()
  });

//   it("Login with Valid credentials", async () => {
//     const { getByLabelText, findByText, getByRole, debug } = render(
//       <MemoryRouter initialEntries={["/login"]}>
//         <App />
//       </MemoryRouter>
//     );
//     const username = getByRole("textbox", { name: "Username" });
//     const password = getByLabelText("Password");
//     const btn = getByRole("button", { name: /submit/i });

//     expect(username).toBeInTheDocument();
//     expect(password).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();

//     fireEvent.input(username, {
//       target: { value: "admin" },
//     });
//     fireEvent.change(password, {
//       target: { value: "admin" },
//     });

//     await act(async () => {
//       fireEvent.submit(btn);
//     });

//     expect(await findByText("Google Maps Api")).toBeInTheDocument();
//     debug();
//   });
});
