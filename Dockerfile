FROM node:14-alpine

WORKDIR /app

ENV NODE_ENV development

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY . .

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
