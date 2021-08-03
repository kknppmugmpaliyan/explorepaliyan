## How to Deploy Frontend

### Deploy Staging

```bash
cd frontend
npx vercel
```

### Deploy Production

```bash
cd frontend
npx vercel --prod
```

## How to Deploy Backend

1. Make Wordpress instance in hosting
2. Replace `.htaccess` in hosting with provided `.htaccess`. in `backend/.htaccess`

## Must Installed WP Plugins

1. REST API - Head Tags
2. Pods - Custom Content Types and Fields
