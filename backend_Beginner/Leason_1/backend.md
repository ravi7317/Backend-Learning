**the backend returns a response, and the frontend preserves the input so the user can retry.** Let’s correct the flow and the error type.

**1. The API is the interface to the backend**

**English:** The frontend sends an HTTP request to an API endpoint such as `POST /notes`. The backend handles that request, attempts to save the note in the database, and returns a response.

**Hinglish:** Frontend `POST /notes` endpoint par HTTP request bhejta hai. Backend us request ko process karke database mein save karne ki koshish karta hai aur response bhejta hai. Is example mein API koi alag service nahi hai jisko backend request forward karta hai—API backend ko access karne ka interface hai.

**2. The error must match what failed**

In this challenge, **the database failed to save the note**. We haven’t been told that login, permissions, or input were wrong.

| Situation | Typical status | Hinglish |
|---|---|---|
| Missing or invalid authentication | `401 Unauthorized` | Valid login proof nahi hai |
| User lacks permission | `403 Forbidden` | User ko action ki permission nahi hai |
| Invalid input, such as an empty title | `400 Bad Request` | Bheje gaye input mein problem hai |
| Unexpected database/server failure | `500 Internal Server Error` | Server par save karte waqt unexpected problem hui |

**English:** For our example, `500` fits an unexpected database failure. `400` would incorrectly suggest that the request itself was the problem.

**Hinglish:** Yahan request valid ho sakti hai, lekin database save nahi kar paaya. Isliye is example mein `500` suitable hai, `400` nahi.

**3. Your temporary-storage idea is correct**

**English:** Keep the title and content in the **frontend’s state or existing input fields**. Clear them only after a successful save. A temporary variable/state can preserve them while the page remains open, but it generally will not survive a page refresh.

**Hinglish:** Title aur content frontend ke state ya input fields mein rehne do. Save successful hone ke baad hi clear karo. Temporary variable/state retry ke liye useful hai, lekin page refresh hone par data lose ho sakta hai.

Your corrected answer is:

> **Backend should:** Receive the HTTP request at `POST /notes`, try to save the note, and return an error if saving fails.  
> **Frontend should show:** “Could not save your note. Please try again.” It should not show “Saved.”  
> **Frontend should preserve:** The entered title and content, and enable the Save button again for retry.

**One quick check:** If the user submits a title containing only spaces, would you choose `400` or `500`—and why?

**`400 Bad Request`** because the title containing only spaces fails our input validation rule.

**Hinglish:** Request ke input mein problem hai—title mein sirf spaces hain. Backend sahi kaam kar raha hai: woh invalid input reject kar raha hai.

Remember:

- **Invalid title → `400`**: User needs to fix the input.
- **Unexpected database failure → `500`**: The server couldn’t complete the save.

**Your challenge is complete:** on a failed save, show an error, preserve the input, allow retry, and never falsely show “Saved.” ✅