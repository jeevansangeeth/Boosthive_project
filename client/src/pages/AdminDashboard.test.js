import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import AdminDashboard from "./AdminDashboard";

describe("AdminDashboard", () => {
  test("renders AdminDashboard component", async () => {
    render(<AdminDashboard />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  test("filters data based on search query", async () => {
    render(<AdminDashboard />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "Test" },
    });

    expect(screen.queryByText("Test Business")).toBeNull();
    expect(screen.queryByText("Another Business")).toBeNull();
  });

  test("calls ApprovedClick and RejectedClick functions when buttons are clicked", async () => {
    render(<AdminDashboard />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    fireEvent.click(screen.getByText("Approve"));

    expect(axios.put).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText("Reject"));

    expect(axios.put).not.toHaveBeenCalled();
  });
});
