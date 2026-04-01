# Project Structure

This project is now organized so frontend and backend debugging is easier.

## Frontend

`frontend/src/app`
- App composition and global config.

`frontend/src/components/common`
- Small reusable UI parts.

`frontend/src/components/sections`
- Page-level sections in display order.

`frontend/src/data`
- Static copy, arrays, image maps, and content config.

`frontend/src/hooks`
- Stateful frontend logic such as scroll tracking, live socket state, and form submission.

`frontend/src/services`
- API and socket wrappers.

## Backend

`backend/src/config`
- Environment helpers and runtime config parsing.

`backend/src/data`
- Static backend data such as metric definitions.

`backend/src/routes`
- Express route handlers grouped by responsibility.

`backend/src/services`
- Backend business logic and payload builders.

`backend/src/socket`
- Socket.IO registration and broadcast behavior.

## Debugging Tips

- If the frontend cannot reach the backend, start with `frontend/src/app/config.js`.
- If live metrics look wrong, inspect `backend/src/services/liveDataService.js`.
- If a form submission fails, check `frontend/src/hooks/useDemoRequest.js` and `backend/src/routes/demoRoutes.js`.
- If socket updates fail, inspect `frontend/src/services/socket.js` and `backend/src/socket/registerLiveSocket.js`.
