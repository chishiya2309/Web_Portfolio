"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/use-in-view";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface Exercise {
  title: string;
  description: string;
  url: string;
}

interface Week {
  week: number;
  chapter: string;
  topic: string;
  exercises: Exercise[];
}

const weeklyExercises: Week[] = [
  {
    week: 1,
    chapter: "Chapter 2",
    topic: "Structure a web application with the MVC pattern",
    exercises: [
      {
        title: "Exercise 1: Email List Basic",
        description:
          "Creating an email list subscription flow using Servlets, JSP, and HTML forms.",
        url: "https://firstwebpractice.onrender.com",
      },
    ],
  },
  {
    week: 2,
    chapter: "Chapter 4",
    topic: "A crash course about HTML5 and CSS3",
    exercises: [
      {
        title: "Exercise 1: Modify the web page",
        description:
          "In this exercise, I updated a survey web page by adding images, new form fields, radio buttons, and checkboxes. I also adjusted the default form behavior and tested the page both on the server and through the file system. This helped me practice basic HTML and CSS editing.",
        url: "https://web-exercise-4-1.onrender.com",
      },
    ],
  },
  {
    week: 3,
    chapter: "Chapter 6, 7",
    topic: "Develop JavaServer Pages; Work with Sessions and Cookies",
    exercises: [
      {
        title: "Exercise 1: Create a new jsp",
        description:
          "In this exercise, I created a new JSP page that displays user input collected from a servlet. I reviewed the servlet code, processed form data, passed it to a User object, and showed the results on the JSP using JSTL. This helped me practice working with JSP, servlets, and data display.",
        url: "https://web-ch06-b6kk.onrender.com",
      },
      {
        title: "Exercise 2: Shopping Cart",
        description:
          "In this exercise, I created a shopping cart application where users can add, update, and remove items. I implemented a servlet to manage the cart logic and store the data in the HttpSession. This helped me practice session management and separating business logic from the view.",
        url: "https://web-ch07-ex3-cart.onrender.com",
      },
    ],
  },
  {
    week: 4,
    chapter: "Chapter 8, 9, 12",
    topic: "EL, JSTL, JDBC",
    exercises: [
      {
        title: "Exercise 1: Use JSTL in the Download Application",
        description:
          "In this exercise, I refactored the existing Download application to incorporate the JavaServer Pages Standard Tag Library (JSTL). I updated the register.jsp and view_cookies.jsp files to securely escape and display data using the <c:out> tag, and modified index.jsp using the <c:if> tag to conditionally show a welcome message based on cookie availability. This helped me practice replacing standard JSP expressions with cleaner, more secure JSTL tags for output and flow control.",
        url: "https://web-9-1-download.onrender.com",
      },
      {
        title: "Exercise 2: Use JSTL in the Cart Application",
        description:
          "In this exercise, I modified the Cart application to dynamically display a list of products using JSTL. I reviewed the servlet and deployment descriptor to understand how the product list was generated and stored in the session. Then, I updated the index.jsp file to iterate through the ArrayList of products using the <c:forEach> tag. I displayed the product data using Expression Language (EL) and secured the output by wrapping the values in the <c:out> tag to prevent XSS attacks. This helped me practice looping through collections and implementing security best practices in JSP.",
        url: "https://web-9-2-cart.onrender.com",
      },
      {
        title: "Exercise 3: Use SQL Gateway",
        description:
          "In this exercise, I developed a web-based SQL Gateway that allows users to execute arbitrary SQL commands directly from a browser. The application uses a Servlet to process the SQL statements entered by the user, executes them against a database via JDBC, and formats the results (either a table for SELECT queries or a success message for updates) into HTML using a utility class. This result is then displayed on a JSP page, demonstrating dynamic database interaction and raw SQL execution within a web app.",
        url: "https://web-ch12-ex1-sqlgateway.onrender.com",
      },
      {
        title: "Exercise 4: Email List Management",
        description:
          "In this exercise, I developed an email list management application using the MVC pattern. I implemented a servlet to handle user requests for joining an email list. The servlet validates the input, checking if the email already exists, and if so, prompts the user to try again. If the input is valid, it creates a User object, stores it in a database (via UserDB), and forwards the user to a 'Thanks' page which displays their entered information using EL. This helped me practice request processing, server-side validation, and data persistence in a Java web application.",
        url: "https://web-ch12-emaillist.onrender.com",
      },
    ],
  },
];

const VISITED_KEY = "portfolio-visited-exercises";

export function Exercises() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [visitedLinks, setVisitedLinks] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  // Load visited links from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(VISITED_KEY);
    if (stored) {
      setVisitedLinks(new Set(JSON.parse(stored)));
    }
  }, []);

  // Handle link click - mark as visited
  const handleLinkClick = (url: string) => {
    const newVisited = new Set(visitedLinks);
    newVisited.add(url);
    setVisitedLinks(newVisited);
    localStorage.setItem(VISITED_KEY, JSON.stringify([...newVisited]));
  };

  const isVisited = (url: string) => mounted && visitedLinks.has(url);

  return (
    <section id="exercises" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-12 flex items-center text-2xl font-bold text-foreground">
          <span className="mr-2 font-mono text-xl text-primary">02.</span>
          Weekly Exercises
          <span className="ml-4 h-px flex-1 bg-muted" />
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-muted md:left-8" />

          {weeklyExercises.map((week, weekIndex) => (
            <div
              key={week.week}
              className={`relative mb-12 pl-8 md:pl-20 transition-all duration-500 delay-${
                weekIndex * 100
              }`}
              style={{
                transitionDelay: `${weekIndex * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-8">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Week header */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                    Week {week.week}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {week.chapter}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {week.topic}
                </h3>
              </div>

              {/* Exercise cards */}
              <div className="space-y-3">
                {week.exercises.map((exercise, exIndex) => {
                  const visited = isVisited(exercise.url);
                  return (
                    <a
                      key={exIndex}
                      href={exercise.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleLinkClick(exercise.url)}
                      className={`group relative flex items-start gap-4 rounded-lg border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                        visited
                          ? "border-primary/30 bg-primary/5"
                          : "border-muted bg-card hover:border-primary/50"
                      }`}
                    >
                      {/* Visited indicator */}
                      {visited && (
                        <div className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs text-background">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Visited</span>
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {exercise.title}
                          </h4>
                          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {exercise.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded border border-muted bg-card" />
            <span>Not visited</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded border border-primary/30 bg-primary/10" />
            <span>Visited</span>
          </div>
        </div>
      </div>
    </section>
  );
}
