import { db } from '../../prisma';
import { competitionCreateSchemaType } from '../validators/competion';

export const competionRepository = {
  createCompetition: (args: competitionCreateSchemaType) =>
    db.competition.create({
      data: {
        image: args.image,
        name: args.name,
      },
    }),
};
