-- CreateTable
CREATE TABLE "ResumeProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "resumePdfUrl" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResumeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "institution" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "dates" TEXT NOT NULL,
    "grade" TEXT,
    "description" TEXT NOT NULL,
    "website" TEXT,
    "image" TEXT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "dates" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "durationLabel" TEXT,
    "responsibilities" TEXT[],
    "technologies" TEXT[],
    "keyLearnings" TEXT,
    "about" TEXT,
    "industry" TEXT,
    "employees" TEXT,
    "headquarters" TEXT,
    "website" TEXT,
    "logo" TEXT,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT[],
    "githubUrl" TEXT,
    "liveUrl" TEXT,
    "thumbnail" TEXT,
    "highlights" TEXT[],
    "year" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "items" TEXT[],

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Education_institution_idx" ON "Education"("institution");

-- CreateIndex
CREATE INDEX "Experience_company_idx" ON "Experience"("company");

-- CreateIndex
CREATE INDEX "Project_title_idx" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_category_key" ON "Skill"("category");
