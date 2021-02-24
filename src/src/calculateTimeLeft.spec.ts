import { calculateTimeLeft } from "./calculateTimeLeft";
describe("calculateTimeLeft", () => {
  it("should return days remaining as 1", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-02T00:00:00.000Z")
    );

    expect(result).toEqual({
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return days remaining as 2", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-03T00:00:00.000Z")
    );

    expect(result).toEqual({
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return years remaining as 30", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-02-01T00:00:00.000Z")
    );

    expect(result).toEqual({
      days: 31,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return years remaining as 366", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2001-01-01T00:00:00.000Z")
    );

    expect(result).toEqual({
      days: 366,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return hours remaining as 1", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-01T01:00:00.000Z")
    );

    expect(result).toEqual({
      days: 0,
      hours: 1,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return hours remaining as 2", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-01T02:00:00.000Z")
    );

    expect(result).toEqual({
      days: 0,
      hours: 2,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return 1 minute remaining", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-01T00:01:00.000Z")
    );

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it("should return 2 minutes remaining", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-01T00:02:00.000Z")
    );

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 2,
      seconds: 0,
    });
  });

  it("should return 1 second remaining", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-01T00:00:01.000Z")
    );

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
    });
  });

  it("should return 2 seconds remaining", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-01T00:00:02.000Z")
    );

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 2,
    });
  });

  it("should return 2 days and 3 hours 5 minutes and 10 seconds remaining", () => {
    const result = calculateTimeLeft(
      new Date("2000-01-01T00:00:00.000Z"),
      new Date("2000-01-03T03:05:10.000Z")
    );

    expect(result).toEqual({
      days: 2,
      hours: 3,
      minutes: 5,
      seconds: 10,
    });
  });
});
