import bcryptjs from "bcryptjs";

export default (req, res, next) => {
  const passwordInput = req.body.password;
  const hashedPassword = req.user.password;

  console.log("🔐 Contraseña enviada:", passwordInput);
  console.log("🧬 Hash guardado:", hashedPassword);

  const passwordMatches = bcryptjs.compareSync(passwordInput, hashedPassword);

  console.log("🔍 ¿Coinciden?:", passwordMatches);

  if (!passwordMatches) {
    return res.status(401).json({
      success: false,
      message: "Invalid password"
    });
  }

  next();
};

