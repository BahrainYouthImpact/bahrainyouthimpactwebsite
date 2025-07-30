"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const school = formData.get("school") as string
  const interest = formData.get("interest") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return {
      error: "Please fill in all required fields.",
    }
  }

  try {
    // Send email to bahrainyouthimpact@gmail.com
    const emailContent = `
      New Contact Form Submission from Bahrain Youth Impact Website
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      School/Organization: ${school || "Not provided"}
      Interest: ${interest || "Not specified"}
      
      Message:
      ${message}
      
      ---
      Sent from Bahrain Youth Impact website
      Reply to: ${email}
    `

    // For now, we'll log it (you can replace this with actual email sending)
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      school,
      interest,
      message,
      emailContent,
    })

    // You can integrate with email services like:
    // - Formspree: https://formspree.io
    // - EmailJS: https://emailjs.com
    // - Resend: https://resend.com
    // - Or any SMTP service

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours at bahrainyouthimpact@gmail.com",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      error: "Something went wrong. Please try again later or email us directly at bahrainyouthimpact@gmail.com",
    }
  }
}
