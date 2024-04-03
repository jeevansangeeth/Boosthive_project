import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import AdminDashboard from "./AdminDashboard";

jest.mock("axios");

describe("AdminDashboard Component", () => {
  test("should render correctly after fetching data", async () => {
    // Mock API response
    const mockData = [
      {
        _id: "1",
        image: "image1.jpg",
        businessName: "Business 1",
        businessType: "Type 1",
        description: "Description 1",
      },
      {
        _id: "2",
        image: "image2.jpg",
        businessName: "Business 2",
        businessType: "Type 2",
        description: "Description 2",
      },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const { getByText } = render(<AdminDashboard />);

    await waitFor(() => {
      expect(getByText("Business 1")).toBeInTheDocument();
      expect(getByText("Business 2")).toBeInTheDocument();
    });
  });

  test("should filter data based on search query", async () => {
    const mockData = [
      {
        _id: "1",
        businessName: "Business1",
        businessType: "Type 1",
        description: "Description 1",
        image: "image1.jpg",
      },
      {
        _id: "2",
        businessName: "Business2",
        businessType: "Type 2",
        description: "Description 2",
        image: "image2.jpg",
      },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const { getByPlaceholderText, getByText } = render(<AdminDashboard />);

    await waitFor(() => {
      expect(getByText("Business 1")).toBeInTheDocument();
      expect(getByText("Business 2")).toBeInTheDocument();
    });

    // Search for "Business 1"
    const searchInput = getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "Business 1" } });

    // Check if only Business 1 is displayed
    expect(getByText("Business 1")).toBeInTheDocument();
    expect(queryByText("Business 2")).not.toBeInTheDocument();
  });

  test("should handle invalid search query", async () => {
    // Mock API response
    const mockData = [
      {
        _id: "1",
        businessName: "Business 1",
        businessType: "Type 1",
        description: "Description 1",
        image: "image1.jpg",
      },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const { getByPlaceholderText, getByText, queryByText } = render(
      <AdminDashboard />
    );

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      expect(getByText("Business 1")).toBeInTheDocument();
    });

    // Search for a query that doesn't exist
    const searchInput = getByPlaceholderText("Search");
    fireEvent.change(searchInput, {
      target: { value: "Non-existent business" },
    });

    // Check if no matching data is displayed
    expect(queryByText("Business 1")).not.toBeInTheDocument();
    expect(getByText("No matching data found")).toBeInTheDocument();
  });
});
