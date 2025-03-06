# User Profile Schema

**Fields:**

- **id**: Unique identifier (string)
- **name**: Full name (string)
- **country**: Country of origin (string)
- **scholarshipInfo**: Object containing:
  - **provider**: Scholarship provider (string)
  - **amount**: Scholarship details (string/number)
- **university**: Object containing:
  - **name**: University name (string)
  - **location**: City and state (string)
  - **campusMapURL**: URL to the campus map (string)
- **contact**: Object containing:
  - **email**: Email address (string)
  - **phone**: Phone number (string)
