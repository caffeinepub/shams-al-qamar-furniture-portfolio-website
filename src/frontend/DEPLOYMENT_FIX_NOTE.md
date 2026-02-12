# Frontend Deployment Fix Documentation

## Issue Identified
The frontend build was failing during deployment due to an incompatibility between Node.js-style environment variables and Vite's build system.

## Root Cause
In `frontend/src/hooks/useInternetIdentity.ts` (line 53), the code was using:
